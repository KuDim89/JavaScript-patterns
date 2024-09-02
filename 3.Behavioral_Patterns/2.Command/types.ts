export interface Command {
  execute(currentValue: number): number;
  undo(currentValue: number): number;
}