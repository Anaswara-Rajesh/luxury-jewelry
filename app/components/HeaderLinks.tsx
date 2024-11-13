import React from 'react';

const HeaderLinks: React.FC = () => (
  <ul className="flex space-x-4">
    <li><a href="/customer/account/" className="hover:text-gray-400">My Account</a></li>
    <li><a href="/wishlist" className="hover:text-gray-400">My Wish List</a></li>
    <li><a href="/customer/account/login/" className="hover:text-gray-400">Sign In</a></li>
    <li><a href="/customer/account/create/" className="hover:text-gray-400">Create an Account</a></li>
  </ul>
);

export default HeaderLinks;
