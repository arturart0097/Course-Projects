function TabButton({ label, select, ...props }) {
  return (
    <li>
      <button className={select ? "active" : undefined} {...props}>
        {label}
      </button>
    </li>
  );
}

export default TabButton;
