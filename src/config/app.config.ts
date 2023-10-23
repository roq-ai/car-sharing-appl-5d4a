interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car details', 'Create bookings', 'Read bookings', 'Create reviews'],
  ownerAbilities: ['Manage company information', 'Manage car fleet', 'Manage bookings', 'Manage services'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ebbe7c61-0448-4f49-bb7a-603d413bfe74',
};
