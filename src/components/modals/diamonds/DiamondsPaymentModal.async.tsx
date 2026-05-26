import type { OwnProps } from './DiamondsPaymentModal';

import { Bundles } from '../../../util/moduleLoader';

import useModuleLoader from '../../../hooks/useModuleLoader';

const DiamondsPaymentModalAsync = (props: OwnProps) => {
  const { modal } = props;
  const DiamondsPaymentModal = useModuleLoader(Bundles.Stars, 'DiamondPaymentModal', !modal?.inputInvoice);

  return DiamondsPaymentModal ? <DiamondsPaymentModal {...props} /> : undefined;
};

export default DiamondsPaymentModalAsync;
