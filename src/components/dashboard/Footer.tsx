import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 p-4 text-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WealthWise Women. All rights reserved.
      </p>
    </footer>
  );
}
