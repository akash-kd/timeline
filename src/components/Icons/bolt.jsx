import { css } from "../../../styled-system/css";

export function CharmLightningBolt(props) {
  return (
    <div className={css({
      width: "100px",
      height: "36px",
       
      border: "3px solid var(--color-1)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      _hover: {
        background: "var(--color-1)",
        color: "var(--color-4)"
      }
    })} {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m9.25 1.75l-6.5 7.5l4.5.5l-.5 4.5l6.5-7.5l-4.5-.5z"
        ></path>
      </svg>
    </div>
  );
}
