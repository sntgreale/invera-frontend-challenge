export const UserTableRowSkeleton = () => {
  return (
    <tr className="animate-pulse">
      {/* Checkbox */}
      <td className="py-4 px-6 w-12">
        <div className="w-5 h-5 bg-muted rounded" />
      </td>

      {/* Name */}
      <td className="py-4 px-6">
        <div className="h-4 w-32 bg-muted rounded" />
      </td>

      {/* Phone */}
      <td className="py-4 px-6 hidden md:table-cell">
        <div className="h-4 w-24 bg-muted rounded" />
      </td>

      {/* Location */}
      <td className="py-4 px-6 hidden md:table-cell">
        <div className="h-4 w-28 bg-muted rounded" />
      </td>

      {/* Company */}
      <td className="py-4 px-6 hidden md:table-cell">
        <div className="h-4 w-24 bg-muted rounded" />
      </td>

      {/* Status */}
      <td className="py-4 px-6">
        <div className="h-4 w-16 bg-muted rounded" />
      </td>

      {/* Actions */}
      <td className="py-4 px-6 w-20">
        <div className="h-4 w-10 bg-muted rounded ml-auto" />
      </td>
    </tr>
  );
};
