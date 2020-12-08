export interface Outfit {
  members: Array<Player>;
  name: string;
  id: string;
  created_at: Date;
  /**
   * Must be between 0 and 4 chars
   */
  tag: string;
}

export interface Player {
  name: string;
  id: string;
  created_at: Date;
  outfit_id?: string;
  last_log_in: Date;
  asp: boolean;
  get_outfit: () => Outfit;
}
