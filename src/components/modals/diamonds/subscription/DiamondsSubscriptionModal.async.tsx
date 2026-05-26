import type { OwnProps } from './DiamondsSubscriptionModal';

import { Bundles } from '../../../../util/moduleLoader';

import useModuleLoader from '../../../../hooks/useModuleLoader';

const DiamondsSubscriptionModalAsync = (props: OwnProps) => {
  const { modal } = props;
  const DiamondsSubscriptionModal = useModuleLoader(Bundles.Stars, 'DiamondsSubscriptionModal', !modal);

  return DiamondsSubscriptionModal ? <DiamondsSubscriptionModal {...props} /> : undefined;
};

export default DiamondsSubscriptionModalAsync;
