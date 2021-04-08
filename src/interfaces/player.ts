export interface Outfit {
  readonly members: Array<Player>;
  readonly name: string;
  readonly id: string;
  readonly created_at: Date;
  /**
   * Must be between 0 and 4 chars
   */
  readonly tag: string;
}

export interface Player {
  readonly name: string;
  readonly id: string;
  readonly created_at: Date;
  readonly outfit_id?: string;
  readonly last_log_in: Date;
  readonly asp: boolean;
  readonly get_outfit: () => Outfit;
}
