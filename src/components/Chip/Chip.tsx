
export enum ChipTypeEnum {
  default = 'default',
  success = 'success',
  danger = 'danger',
  warning = 'warning'
}

export type ChipProps = {
  value: string;
  type?: ChipTypeEnum;
};

/**
 * This is a Chip component. 
 */
export const Chip = ({ value, type }: ChipProps) => {
  return (
    <span className={'px-3 py-1 rounded-full border-2 ' + (type === ChipTypeEnum.success ? ' bg-green-100 border-green-300' : type === ChipTypeEnum.warning ? 'bg-orange-100 border-orange-300': type === ChipTypeEnum.danger ? 'bg-red-100 border-red-300': 'bg-gray-100')}>{ value }</span>
  );
};

export default Chip;