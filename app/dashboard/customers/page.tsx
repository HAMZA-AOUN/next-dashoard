import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer',
};

const CustomersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>CustomersPage</div>;
};

export default CustomersPage;
