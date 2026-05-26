import type { OwnProps } from './AboutDiamondGiftModal';

import { Bundles } from '../../../util/moduleLoader';

import useModuleLoader from '../../../hooks/useModuleLoader';

const AboutDiamondGiftModalAsync = (props: OwnProps) => {
  const { modal } = props;
  const AboutDiamondGiftModal = useModuleLoader(Bundles.Stars, 'AboutDiamondGiftModal', !modal);

  return AboutDiamondGiftModal ? <AboutDiamondGiftModal {...props} /> : undefined;
};

export default AboutDiamondGiftModalAsync;
