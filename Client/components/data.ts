import { Column, Business } from "./types";

export const columns: Column[] = [
  { name: "Enterprise Name", uid: "enterprisename", sortable: true },
  { name: "Contact Name", uid: "contactname", sortable: true },
  { name: "Website", uid: "website", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Phone Number", uid: "number", sortable: true },
  { name: "Email", uid: "email", sortable: true },
  { name: "Address", uid: "address", sortable: true },
  { name: "Actions", uid: "actions" }
];

export const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" }
];

export const businesses: Business[] = [
  {
    id: 1,
    enterprisename: "ABC Corp",
    contactname: "John Doe",
    website: "https://abc.com",
    status: "active",
    number: "123-456-7890",
    email: "john.doe@abc.com",
    address: "123 Main St, Anytown, USA"
  },
  {
    id: 2,
    enterprisename: "XYZ Ltd",
    contactname: "Jane Smith",
    website: "https://xyz.com",
    status: "paused",
    number: "987-654-3210",
    email: "jane.smith@xyz.com",
    address: "456 Elm St, Othertown, USA"
  }
];
