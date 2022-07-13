import React from "react";
import { Flex } from "@ledgerhq/native-ui";
import {
  SwapTransactionType,
  ExchangeRate,
  Pair,
} from "@ledgerhq/live-common/lib/exchange/swap/types";
import { From } from "./From";
import { To } from "./To";

interface Props {
  swapTx: SwapTransactionType;
  provider?: string;
  exchangeRate?: ExchangeRate;
  pairs: Pair[];
}

export function TxForm({ swapTx, provider, exchangeRate, pairs }: Props) {
  return (
    <Flex>
      <From swapTx={swapTx} provider={provider} pairs={pairs} />
      <To
        swapTx={swapTx}
        exchangeRate={exchangeRate}
        provider={provider}
        pairs={pairs}
      />
    </Flex>
  );
}
