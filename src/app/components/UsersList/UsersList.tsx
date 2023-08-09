import { User } from "@/models/User";
import UserRow from "./UserRow";

export default function UsersList({ users }: { users: User[] }) {

  return (
    users.length > 0 ?
      <div className="list-group">
        {
          users.map(user => <UserRow key={user.email} user={user} />)
        }
      </div>
      :
      <div>Non hai ancora pazienti!</div>
  )

}