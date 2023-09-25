import { Status, StatusEnum, ClientType, ClientTypeEnum } from "../../types";
import { Entity, Id, Field, Enum } from "@remult";

@Entity<Clients>("clients")
export class Clients {
  @Id()
  clNum: string;

  @Field()
  clId: string;

  @Field()
  clName: string;

  @Field()
  clStatus: ClientStatusEnum = ClientStatusEnum.Potential;

  @Field()
  @Enum(ClientTypeEnum)
  clType: ClientTypeEnum;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field()
  clOrders: number[];
}
