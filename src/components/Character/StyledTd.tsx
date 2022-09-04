type StyledIdProps = React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;
export const StyledTd = ({ children, ...props }: StyledIdProps) => (
  <td className="border border-slate-300  p-4 text-slate-500" {...props}>
    {children}
  </td>
);
