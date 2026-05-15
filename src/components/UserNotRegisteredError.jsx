import React from 'react';

export default function UserNotRegisteredError() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-2 text-2xl font-semibold text-red-600">Akses Ditolak</h1>
      <p className="text-muted-foreground">
        Harap maaf, nombor telefon atau maklumat anda tidak didaftarkan dalam senarai tetamu. Sila hubungi tuan rumah.
      </p>
    </div>
  );
}
