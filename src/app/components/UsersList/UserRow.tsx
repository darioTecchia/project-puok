import { User } from "@/models/User";
import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
require('dayjs/locale/it')
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
dayjs.locale('it')

export default function UserRow({ user }: { user: User }) {

  return (
    <Link key={user.email} href={'/users/' + user.id} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <div className="d-flex gap-2 w-100 justify-content-between flex-wrap">
        <div>
          <h6 className="mb-0">{user.firstName} {user.lastName}</h6>
          <p className="mb-0 opacity-75">{user.email}</p>
        </div>
        <small className="opacity-50 text-nowrap">{dayjs(user.periodicChecks[user.periodicChecks.length - 1].date).format('llll')}</small>
      </div>
    </Link>
  )
}