import type { OwnProps } from './DiamondsGiftModal';

import { Bundles } from '../../../../util/moduleLoader';

import useModuleLoader from '../../../../hooks/useModuleLoader';

const DiamondsGiftModalAsync = (props: OwnProps) => {
  const { modal } = props;
  const DiamondsGiftModal = useModuleLoader(Bundles.Stars, 'DiamondsGiftModal', !modal);

  return DiamondsGiftModal ? <DiamondsGiftModal {...props} /> : undefined;
};

export default DiamondsGiftModalAsync;
