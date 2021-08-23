// intersection type

interface Serializable {
  serialize(x: unknown): string;
}

interface Identifiable {
  id: string;
}

const something: Serializable & Identifiable = {
  id: '123',
  serialize(x: unknown): string {
    return JSON.stringify(x);
  },
};

// intersection type should both type compatible

// flexible type for object
type unknownRecord = Record<PropertyKey, unknown>;
