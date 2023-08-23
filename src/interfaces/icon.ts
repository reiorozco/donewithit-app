interface Icon {
  name:
    | "apps"
    | "basketball"
    | "book-open-blank-variant"
    | "camera"
    | "car"
    | "cards"
    | "email"
    | "floor-lamp"
    | "format-list-bulleted"
    | "headphones"
    | "logout"
    | "shoe-heel"
    | "window-maximize";
  backgroundColor?: string;
  iconColor?: string;
  size?: number;
}

export default Icon;
