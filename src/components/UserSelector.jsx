import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function UserSelector({ users, selectedUserId, onUserChange }) {
  return (
    <Select value={selectedUserId} onValueChange={onUserChange}>
      <SelectTrigger className="w-[200px] bg-card border-border shadow-soft">
        <SelectValue placeholder="Select user" />
      </SelectTrigger>
      <SelectContent>
        {users.map((user) => (
          <SelectItem key={user.id} value={user.id}>
            {user.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}