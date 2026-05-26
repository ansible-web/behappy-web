import type { OwnProps } from './DiamondsBalanceModal';

import { Bundles } from '../../../util/moduleLoader';

import useModuleLoader from '../../../hooks/useModuleLoader';

const DiamondsBalanceModalAsync = (props: OwnProps) => {
  const { modal } = props;
  const DiamondsBalanceModal = useModuleLoader(Bundles.Stars, 'DiamondsBalanceModal', !modal);

  return DiamondsBalanceModal ? <DiamondsBalanceModal {...props} /> : undefined;
};

export default DiamondsBalanceModalAsync;
