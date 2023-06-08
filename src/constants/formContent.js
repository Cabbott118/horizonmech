export const customerFormContent = [
  {
    type: 'typography',
    text: 'Company Information',
    variant: 'h6',
    name: 'companyInformation',
  },
  {
    type: 'text',
    label: 'Company Name',
    name: 'companyName',
    required: true,
  },
  {
    type: 'text',
    label: 'Address',
    name: 'addressLineOne',
    required: true,
  },
  {
    type: 'text',
    label: 'City',
    name: 'city',
    required: true,
  },
  {
    type: 'select',
    label: 'State',
    name: 'state',
    required: true,
    options: ['USA', 'Canada', 'UK'],
  },
  {
    type: 'text',
    label: 'Zip Code',
    name: 'zipCode',
    required: true,
  },
  {
    type: 'typography',
    text: 'Primary Contact Information',
    variant: 'h6',
    name: 'primaryContactInformation',
  },
  {
    type: 'text',
    label: 'First Name',
    name: 'primaryContactFirstName',
    required: true,
  },
  {
    type: 'text',
    label: 'Last Name',
    name: 'primaryContactLastName',
    required: true,
  },
  {
    type: 'typography',
    text: 'Accounts Payable Information',
    variant: 'h6',
    name: 'accountsPayableInformation',
  },
  {
    type: 'text',
    label: 'First Name',
    name: 'accountsPayableFirstName',
    required: true,
  },
  {
    type: 'text',
    label: 'Last Name',
    name: 'accountsPayableLastName',
    required: true,
  },
];

export const contractorFormContent = [
  {
    type: 'text',
    label: 'Cont',
    name: 'name',
    required: true,
  },

  {
    type: 'select',
    label: 'Country',
    name: 'country',
    options: ['USA', 'Canada', 'UK'],
  },
];
