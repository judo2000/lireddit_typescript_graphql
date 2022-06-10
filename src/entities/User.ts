import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: 'date' })
  created_at = new Date();

  @Field(() => String)
  @Property({ type: 'date', onUpdate: () => new Date() })
  updated_at = new Date();

  @Field()
  @Property({ type: 'text', unique: true })
  username!: string;

  // removed the @Field decorator so the password
  // is not exposed to graphql query
  @Property({ type: 'text' })
  password!: string;
}
