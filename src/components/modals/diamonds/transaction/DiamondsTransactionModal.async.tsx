import type { OwnProps } from './DiamondsTransactionModal';

import { Bundles } from '../../../../util/moduleLoader';

import useModuleLoader from '../../../../hooks/useModuleLoader';

const DiamondsTransactionModalAsync = (props: OwnProps) => {
  const { modal } = props;
  const DiamondsTransactionModal = useModuleLoader(Bundles.Stars, 'DiamondsTransactionInfoModal', !modal);

  return DiamondsTransactionModal ? <DiamondsTransactionModal {...props} /> : undefined;
};

export default DiamondsTransactionModalAsync;
