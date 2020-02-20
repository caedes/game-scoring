import React from 'react';

export default function HistoryScreen({ headerComponent }) {
  const Header = headerComponent;

  return <>{headerComponent && <Header title="Historique" />}</>;
}
