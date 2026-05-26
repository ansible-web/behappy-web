import type { OwnProps } from './DiamondsGiftingPickerModal';

import { Bundles } from '../../../util/moduleLoader';

import useModuleLoader from '../../../hooks/useModuleLoader';

const DiamondsGiftingPickerModalAsync = (props: OwnProps) => {
  const { isOpen } = props;
  const DiamondsGiftingPickerModal = useModuleLoader(Bundles.Stars, 'DiamondsGiftingPickerModal', !isOpen);

  return DiamondsGiftingPickerModal ? <DiamondsGiftingPickerModal {...props} /> : undefined;
};

export default DiamondsGiftingPickerModalAsync;
