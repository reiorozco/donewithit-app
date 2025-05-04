import React from "react";
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormStateReturn,
} from "react-hook-form";

import { ImageInputList } from "@/components/lists";
import ErrorMessage from "./ErrorMessage";

type renderItemProps<T extends FieldValues> = {
  field: ControllerRenderProps<T, Path<T>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
};

interface Props<T extends FieldValues> {
  control: Control<T, any, T>;
  name: Path<T>;
}

function AppFormImagePicker<T extends FieldValues>({
  control,
  name,
}: Props<T>) {
  const renderField = ({
    field: { onChange, value },
    fieldState: { error },
  }: renderItemProps<T>) => {
    const images = Array.isArray(value) ? value : [];

    const handleAddImage = (image: string | null) => {
      onChange([...images, image]);
    };

    const handleDeleteImage = (image: string | null) =>
      onChange(images.filter((i: string) => i !== image));

    return (
      <>
        <ImageInputList
          images={images}
          onAddImage={handleAddImage}
          onRemoveImage={handleDeleteImage}
        />

        <ErrorMessage error={error?.message} />
      </>
    );
  };

  return <Controller control={control} name={name} render={renderField} />;
}

export default AppFormImagePicker;
