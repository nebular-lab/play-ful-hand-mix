import { z } from 'zod';

export const CardMarkTypeSchema = z.union([
  z.literal('s'),
  z.literal('h'),
  z.literal('d'),
  z.literal('c'),
]);
export type CardMarkType = z.infer<typeof CardMarkTypeSchema>;

export const CardNumTypeSchema = z.union([
  z.literal('A'),
  z.literal('2'),
  z.literal('3'),
  z.literal('4'),
  z.literal('5'),
  z.literal('6'),
  z.literal('7'),
  z.literal('8'),
  z.literal('9'),
  z.literal('T'),
  z.literal('J'),
  z.literal('Q'),
  z.literal('K'),
]);
export type CardNumType = z.infer<typeof CardNumTypeSchema>;

export const CardTypeSchema = z.object({
  mark: CardMarkTypeSchema,
  num: CardNumTypeSchema,
});
export type CardType = z.infer<typeof CardTypeSchema>;

export const NumCardTypeSchema = z.object({
  num: z.number(),
  mark: z.number(),
});
export type NumCardType = z.infer<typeof NumCardTypeSchema>;

export const PositionTypeSchema = z.union([z.literal('OOP'), z.literal('IP')]);
export type PositionType = z.infer<typeof PositionTypeSchema>;

export const MoveTypeSchema = z.union([
  z.literal('FOLD'),
  z.literal('BET S'),
  z.literal('BET M'),
  z.literal('BET L'),
  z.literal('RAISE'),
  z.literal('CALL'),
  z.literal('CHECK'),
  z.literal('ALLIN'),
  z.literal('PREFLOP'),
]);
export type MoveType = z.infer<typeof MoveTypeSchema>;

export const suitTypeSchema = z.union([
  z.literal('suited'),
  z.literal('offsuited'),
  z.literal('pair'),
]);
export type suitType = z.infer<typeof suitTypeSchema>;

export const ActionTypeSchema = z.object({
  move: MoveTypeSchema,
  percent: z.number(),
});
export type ActionType = z.infer<typeof ActionTypeSchema>;

export const HandTypeSchema = z.object({
  isDeleted: z.boolean(),
  actions: z.array(ActionTypeSchema),
});
export type HandType = z.infer<typeof HandTypeSchema>;

export const HandSquareSchema = z.object({
  suit: suitTypeSchema,
  hands: z.array(HandTypeSchema),
});
export type HandSquareType = z.infer<typeof HandSquareSchema>;

export const HandRangeSchema = z.array(z.array(HandSquareSchema));
export type HandRangeType = z.infer<typeof HandRangeSchema>;

export const PairHandRangeSchema = z.object({
  OOP: HandRangeSchema,
  IP: HandRangeSchema,
});
export type PairHandRangeType = z.infer<typeof PairHandRangeSchema>;

export const HandRangeObjectSchema = z.record(
  z.record(z.record(z.record(z.number()))),
);
export type HandRangeObjectType = z.infer<typeof HandRangeObjectSchema>;

const IncludeSuitTypeSchema = z.array(z.tuple([CardMarkTypeSchema, z.boolean()]));
export type IncludeSuitType = z.infer<typeof IncludeSuitTypeSchema>;

export const HandKindSchema = z.object({
  // straightFlush: z.array(CardIndexSchema),
  // fourCard: z.array(CardIndexSchema),
  // fullHouse: z.array(CardIndexSchema),
  // flush: z.array(CardIndexSchema),
  // straight: z.array(CardIndexSchema),
  // threeCard: z.array(CardIndexSchema),
  // twoPair: z.array(CardIndexSchema),
  // overPocket: z.array(CardIndexSchema),
  // topHit: z.array(CardIndexSchema),
  // secondPocket: z.array(CardIndexSchema),
  // secondHit: z.array(CardIndexSchema),
  // lowPair: z.array(CardIndexSchema),
  // AHigh: z.array(CardIndexSchema),
  // KHigh: z.array(CardIndexSchema),
  // nothing: z.array(CardIndexSchema),
});
export type HandKindType = z.infer<typeof HandKindSchema>;

export const DrawKindSchema = z.object({
  // comboDraw: z.array(CardIndexSchema),
  // OESD: z.array(CardIndexSchema),
  // GSSD: z.array(CardIndexSchema),
  // BDSD: z.array(CardIndexSchema),
  // flushDraw: z.array(CardIndexSchema),
  // noDraw: z.array(CardIndexSchema),
});
export type DrawKindType = z.infer<typeof DrawKindSchema>;

export interface StreetNodeType {
  type: 'StreetNode';
  board: CardType[];
  handRanges: PairHandRangeType;
  child?: CardNodeType[];
}

export interface CardNodeType {
  isDisplay: boolean;
  cards: CardType[];
  child?: PositionNodeType;
}

export interface PositionNodeType {
  type: 'PositionNode';
  position: PositionType;
  handRanges: PairHandRangeType;
  actions: ActionType[];
  //handKind: HandKindType;
  //drawKind: DrawKindType;
  board: CardType[];
  child?: ActionNodeType[];
}

export interface ActionNodeType {
  isDisplay: boolean;
  isSelected: boolean;
  move: MoveType;
  child?: StreetNodeType | PositionNodeType;
}
export interface HandNodeType {
  id: string;
  userName: string;
  iconURL: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  child?: PositionNodeType;
}

export const HandNodeSchema: z.ZodSchema<Omit<HandNodeType, 'id' | 'child'>> =
  z.object({
    userName: z.string(),
    iconURL: z.string(),
    title: z.string(),
    createdAt: z.number(),
    updatedAt: z.number(),
  });

export const StreetNodeSchema: z.ZodSchema<
  Omit<StreetNodeType, 'id' | 'child'>
> = z.object({
  type: z.literal('StreetNode'),
  handRanges: PairHandRangeSchema,
  board: z.array(CardTypeSchema),
});

export const CardNodeSchema = z.object({
  isDisplay: z.boolean(),
  cards: z.array(CardTypeSchema),
});

export const PositionNodeSchema: z.ZodSchema<
  Omit<PositionNodeType, 'id' | 'child'>
> = z.object({
  type: z.literal('PositionNode'),
  position: PositionTypeSchema,
  actions: z.array(ActionTypeSchema),
  //handKind: HandKindSchema,
  //drawKind: DrawKindSchema,
  board: z.array(CardTypeSchema),
  handRanges: PairHandRangeSchema,
});

export const ActionNodeSchema: z.ZodSchema<
  Omit<ActionNodeType, 'id' | 'child'>
> = z.object({
  isDisplay: z.boolean(),
  isSelected: z.boolean(),
  move: MoveTypeSchema,
});
