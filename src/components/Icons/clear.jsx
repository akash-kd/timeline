import { css } from "../../../styled-system/css";

export function CharmBin(props) {
  return (
    <div
      className={css({
        width: "100px",
        height: "36px",

        border: "3px solid var(--color-1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        _hover: {
          background: "var(--color-1)",
          color: "var(--color-4)",
        },
      })}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M5.75 4.25v-2.5h4.5v2.5m-6.5 1v9h8.5v-9m-9.5-.5h10.5"
        ></path>
      </svg>
    </div>
  );
}
