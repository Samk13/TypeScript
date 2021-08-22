const unreachableCaseError = (x: never): never => {
  throw new Error(x);
};

interface UserUpdatedEvent {
  eventType: 'user-updated';
  params: {
    userId: string;
    name: string;
    email: string;
  };
}

interface UserDeletedEvent {
  eventType: 'user-updated';
  params: {
    userId: string;
  };
}

type BetterUserEvent = UserUpdatedEvent | UserDeletedEvent;

const handleEvenet = (event: BetterUserEvent): void => {
  if (event.eventType === 'user-updated') {
    console.log(event.params.userId);
    return;
  }
  if (event.eventType === 'user-deleted') {
    console.log(event.params.userId);
    return;
  }
  unreachableCaseError(event);
};
