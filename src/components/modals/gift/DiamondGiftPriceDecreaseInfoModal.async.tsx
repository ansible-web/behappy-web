import type { OwnProps } from './DiamondGiftPriceDecreaseInfoModal';

import { Bundles } from '../../../util/moduleLoader';

import useModuleLoader from '../../../hooks/useModuleLoader';

const DiamondGiftPriceDecreaseInfoModalAsync = (props: OwnProps) => {
  const { modal } = props;
  const DiamondGiftPriceDecreaseInfoModal = useModuleLoader(Bundles.Stars, 'DiamondGiftPriceDecreaseInfoModal', !modal);

  return DiamondGiftPriceDecreaseInfoModal ? <DiamondGiftPriceDecreaseInfoModal {...props} /> : undefined;
};

export default DiamondGiftPriceDecreaseInfoModalAsync;
