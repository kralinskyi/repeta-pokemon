import css from "./Layout.module.css";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};
