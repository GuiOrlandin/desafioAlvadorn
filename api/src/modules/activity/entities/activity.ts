import { randomUUID } from 'crypto';

export interface ActivitySchema {
  description?: string;
  name: string;
  id?: string;
  created_at?: Date;
}

export class Activity {
  private props: ActivitySchema;

  constructor(props: ActivitySchema) {
    this.props = {
      ...props,
      created_at: props.created_at || new Date(),
      id: props.id || randomUUID(),
      description: props.description || '',
    };
  }

  get id(): string {
    return this.props.id;
  }

  get description(): string {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
