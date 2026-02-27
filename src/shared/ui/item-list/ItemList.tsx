import type { ReactNode } from "react";
import React from "react";

interface WithId {
  id: string | number;
}

interface ItemListProps<T extends WithId> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

export function ItemList<T extends WithId>({
  items,
  renderItem,
}: ItemListProps<T>) {
  return (
    <React.Fragment>
      {items.map((item, index) => renderItem(item, index))}
    </React.Fragment>
  );
}
