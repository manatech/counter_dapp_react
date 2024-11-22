import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  ABIType,
  ABIGetter,
  ABIReceiver,
  TupleBuilder,
  DictionaryValue,
} from '@ton/core';

export type StateInit = {
  $$type: 'StateInit';
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type StdAddress = {
  $$type: 'StdAddress';
  workchain: bigint;
  address: bigint;
};

export function storeStdAddress(src: StdAddress) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.workchain, 8);
    b_0.storeUint(src.address, 256);
  };
}

export function loadStdAddress(slice: Slice) {
  let sc_0 = slice;
  let _workchain = sc_0.loadIntBig(8);
  let _address = sc_0.loadUintBig(256);
  return {
    $$type: 'StdAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

function loadTupleStdAddress(source: TupleReader) {
  let _workchain = source.readBigNumber();
  let _address = source.readBigNumber();
  return {
    $$type: 'StdAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

function loadGetterTupleStdAddress(source: TupleReader) {
  let _workchain = source.readBigNumber();
  let _address = source.readBigNumber();
  return {
    $$type: 'StdAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

function storeTupleStdAddress(source: StdAddress) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.workchain);
  builder.writeNumber(source.address);
  return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
    },
    parse: (src) => {
      return loadStdAddress(src.loadRef().beginParse());
    },
  };
}

export type VarAddress = {
  $$type: 'VarAddress';
  workchain: bigint;
  address: Slice;
};

export function storeVarAddress(src: VarAddress) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.workchain, 32);
    b_0.storeRef(src.address.asCell());
  };
}

export function loadVarAddress(slice: Slice) {
  let sc_0 = slice;
  let _workchain = sc_0.loadIntBig(32);
  let _address = sc_0.loadRef().asSlice();
  return {
    $$type: 'VarAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

function loadTupleVarAddress(source: TupleReader) {
  let _workchain = source.readBigNumber();
  let _address = source.readCell().asSlice();
  return {
    $$type: 'VarAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

function loadGetterTupleVarAddress(source: TupleReader) {
  let _workchain = source.readBigNumber();
  let _address = source.readCell().asSlice();
  return {
    $$type: 'VarAddress' as const,
    workchain: _workchain,
    address: _address,
  };
}

function storeTupleVarAddress(source: VarAddress) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.workchain);
  builder.writeSlice(source.address.asCell());
  return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
    },
    parse: (src) => {
      return loadVarAddress(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: 'Context';
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Slice;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw.asCell());
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef().asSlice();
  return {
    $$type: 'Context' as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell().asSlice();
  return {
    $$type: 'Context' as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function loadGetterTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell().asSlice();
  return {
    $$type: 'Context' as const,
    bounced: _bounced,
    sender: _sender,
    value: _value,
    raw: _raw,
  };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw.asCell());
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: 'SendParameters';
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function loadGetterTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return {
    $$type: 'SendParameters' as const,
    bounce: _bounce,
    to: _to,
    value: _value,
    mode: _mode,
    body: _body,
    code: _code,
    data: _data,
  };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: 'Deploy';
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function loadGetterTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'Deploy' as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: 'DeployOk';
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function loadGetterTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: 'DeployOk' as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type FactoryDeploy = {
  $$type: 'FactoryDeploy';
  queryId: bigint;
  cashback: Address;
};

export function storeFactoryDeploy(src: FactoryDeploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(1829761339, 32);
    b_0.storeUint(src.queryId, 64);
    b_0.storeAddress(src.cashback);
  };
}

export function loadFactoryDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 1829761339) {
    throw Error('Invalid prefix');
  }
  let _queryId = sc_0.loadUintBig(64);
  let _cashback = sc_0.loadAddress();
  return {
    $$type: 'FactoryDeploy' as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: 'FactoryDeploy' as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function loadGetterTupleFactoryDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  let _cashback = source.readAddress();
  return {
    $$type: 'FactoryDeploy' as const,
    queryId: _queryId,
    cashback: _cashback,
  };
}

function storeTupleFactoryDeploy(source: FactoryDeploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  builder.writeAddress(source.cashback);
  return builder.build();
}

function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadFactoryDeploy(src.loadRef().beginParse());
    },
  };
}

export type Increment = {
  $$type: 'Increment';
  amount: bigint;
};

export function storeIncrement(src: Increment) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(39168741, 32);
    b_0.storeUint(src.amount, 32);
  };
}

export function loadIncrement(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 39168741) {
    throw Error('Invalid prefix');
  }
  let _amount = sc_0.loadUintBig(32);
  return { $$type: 'Increment' as const, amount: _amount };
}

function loadTupleIncrement(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: 'Increment' as const, amount: _amount };
}

function loadGetterTupleIncrement(source: TupleReader) {
  let _amount = source.readBigNumber();
  return { $$type: 'Increment' as const, amount: _amount };
}

function storeTupleIncrement(source: Increment) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.amount);
  return builder.build();
}

function dictValueParserIncrement(): DictionaryValue<Increment> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeIncrement(src)).endCell());
    },
    parse: (src) => {
      return loadIncrement(src.loadRef().beginParse());
    },
  };
}

export type Counter$Data = {
  $$type: 'Counter$Data';
  counter: bigint;
  id: bigint;
};

export function storeCounter$Data(src: Counter$Data) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(src.counter, 32);
    b_0.storeUint(src.id, 32);
  };
}

export function loadCounter$Data(slice: Slice) {
  let sc_0 = slice;
  let _counter = sc_0.loadUintBig(32);
  let _id = sc_0.loadUintBig(32);
  return { $$type: 'Counter$Data' as const, counter: _counter, id: _id };
}

function loadTupleCounter$Data(source: TupleReader) {
  let _counter = source.readBigNumber();
  let _id = source.readBigNumber();
  return { $$type: 'Counter$Data' as const, counter: _counter, id: _id };
}

function loadGetterTupleCounter$Data(source: TupleReader) {
  let _counter = source.readBigNumber();
  let _id = source.readBigNumber();
  return { $$type: 'Counter$Data' as const, counter: _counter, id: _id };
}

function storeTupleCounter$Data(source: Counter$Data) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.counter);
  builder.writeNumber(source.id);
  return builder.build();
}

function dictValueParserCounter$Data(): DictionaryValue<Counter$Data> {
  return {
    serialize: (src, builder) => {
      builder.storeRef(beginCell().store(storeCounter$Data(src)).endCell());
    },
    parse: (src) => {
      return loadCounter$Data(src.loadRef().beginParse());
    },
  };
}

type Counter_init_args = {
  $$type: 'Counter_init_args';
  id: bigint;
};

function initCounter_init_args(src: Counter_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.id, 257);
  };
}

async function Counter_init(id: bigint) {
  const __code = Cell.fromBase64(
    'te6ccgECDwEAAjsAART/APSkE/S88sgLAQIBYgIDApzQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxa2zzy4ILI+EMBzH8BygBZAssfyx/J7VQMBAIBWAoLA/Ttou37AZIwf+BwIddJwh+VMCDXCx/eIIIKVarluo4VMNMfAYIKVarluvLggdMfATESoAF/4CDAACLXScEhsJJbf+AgghCUapi2uo6oMNMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8n4QgFwbds8f+DAAOMPcAUGBwE8bW0ibrOZWyBu8tCAbyIBkTLiECRwAwSAQlAj2zwwCABa+QGC8MT41yMS7f3vW3vseDO9uxYtFRG9eKkSrtDyY3r2VXKuupYBpAF/2zHgAAIwAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7CAkAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwCEbmhjbPNs8bCGAwNABG4K+7UTQ0gABgBUO1E0NQB+GPSAAGX0x/TH1lsEuD4KNcLCoMJuvLgiYEBAdcAAQHR2zwOAAIhAARwAQ=='
  );
  const __system = Cell.fromBase64(
    'te6cckECEQEAAkUAAQHAAQEFoendAgEU/wD0pBP0vPLICwMCAWIECwKc0AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8Wts88uCCyPhDAcx/AcoAWQLLH8sfye1UDQUD9O2i7fsBkjB/4HAh10nCH5UwINcLH94gggpVquW6jhUw0x8BggpVquW68uCB0x8BMRKgAX/gIMAAItdJwSGwklt/4CCCEJRqmLa6jqgw0x8BghCUapi2uvLggdM/ATHIAYIQr/kPV1jLH8s/yfhCAXBt2zx/4MAA4w9wBgkKATxtbSJus5lbIG7y0IBvIgGRMuIQJHADBIBCUCPbPDAHAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7CAgAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwAWvkBgvDE+NcjEu3971t77HgzvbsWLRURvXipEq7Q8mN69lVyrrqWAaQBf9sx4AACMAIBWAwQAhG5oY2zzbPGwhgNDwFQ7UTQ1AH4Y9IAAZfTH9MfWWwS4Pgo1wsKgwm68uCJgQEB1wABAdHbPA4ABHABAAIhABG4K+7UTQ0gABjS3LDu'
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initCounter_init_args({ $$type: 'Counter_init_args', id })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const Counter_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack underflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  11: { message: `'Unknown' error` },
  12: { message: `Fatal error` },
  13: { message: `Out of gas error` },
  14: { message: `Virtualization error` },
  32: { message: `Action list is invalid` },
  33: { message: `Action list is too long` },
  34: { message: `Action is invalid or not supported` },
  35: { message: `Invalid source address in outbound message` },
  36: { message: `Invalid destination address in outbound message` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  39: { message: `Outbound message does not fit into a cell after rewriting` },
  40: { message: `Cannot process a message` },
  41: { message: `Library reference is null` },
  42: { message: `Library change action error` },
  43: {
    message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree`,
  },
  50: { message: `Account state size exceeded limits` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
};

const Counter_types: ABIType[] = [
  {
    name: 'StateInit',
    header: null,
    fields: [
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: false } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: false } },
    ],
  },
  {
    name: 'StdAddress',
    header: null,
    fields: [
      {
        name: 'workchain',
        type: { kind: 'simple', type: 'int', optional: false, format: 8 },
      },
      {
        name: 'address',
        type: { kind: 'simple', type: 'uint', optional: false, format: 256 },
      },
    ],
  },
  {
    name: 'VarAddress',
    header: null,
    fields: [
      {
        name: 'workchain',
        type: { kind: 'simple', type: 'int', optional: false, format: 32 },
      },
      {
        name: 'address',
        type: { kind: 'simple', type: 'slice', optional: false },
      },
    ],
  },
  {
    name: 'Context',
    header: null,
    fields: [
      {
        name: 'bounced',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'sender',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'raw', type: { kind: 'simple', type: 'slice', optional: false } },
    ],
  },
  {
    name: 'SendParameters',
    header: null,
    fields: [
      {
        name: 'bounce',
        type: { kind: 'simple', type: 'bool', optional: false },
      },
      {
        name: 'to',
        type: { kind: 'simple', type: 'address', optional: false },
      },
      {
        name: 'value',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      {
        name: 'mode',
        type: { kind: 'simple', type: 'int', optional: false, format: 257 },
      },
      { name: 'body', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'code', type: { kind: 'simple', type: 'cell', optional: true } },
      { name: 'data', type: { kind: 'simple', type: 'cell', optional: true } },
    ],
  },
  {
    name: 'Deploy',
    header: 2490013878,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
    ],
  },
  {
    name: 'DeployOk',
    header: 2952335191,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
    ],
  },
  {
    name: 'FactoryDeploy',
    header: 1829761339,
    fields: [
      {
        name: 'queryId',
        type: { kind: 'simple', type: 'uint', optional: false, format: 64 },
      },
      {
        name: 'cashback',
        type: { kind: 'simple', type: 'address', optional: false },
      },
    ],
  },
  {
    name: 'Increment',
    header: 39168741,
    fields: [
      {
        name: 'amount',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
    ],
  },
  {
    name: 'Counter$Data',
    header: null,
    fields: [
      {
        name: 'counter',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
      {
        name: 'id',
        type: { kind: 'simple', type: 'uint', optional: false, format: 32 },
      },
    ],
  },
];

const Counter_getters: ABIGetter[] = [
  {
    name: 'counter',
    arguments: [],
    returnType: { kind: 'simple', type: 'int', optional: false, format: 257 },
  },
];

export const Counter_getterMapping: { [key: string]: string } = {
  counter: 'getCounter',
};

const Counter_receivers: ABIReceiver[] = [
  { receiver: 'internal', message: { kind: 'text', text: 'increment' } },
  { receiver: 'internal', message: { kind: 'typed', type: 'Increment' } },
  { receiver: 'internal', message: { kind: 'empty' } },
  { receiver: 'internal', message: { kind: 'typed', type: 'Deploy' } },
];

//#c6e

export class Counter implements Contract {
  static async init(id: bigint) {
    return await Counter_init(id);
  }

  static async fromInit(id: bigint) {
    const init = await Counter_init(id);
    const address = contractAddress(0, init);
    return new Counter(address, init);
  }

  static fromAddress(address: Address) {
    return new Counter(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: Counter_types,
    getters: Counter_getters,
    receivers: Counter_receivers,
    errors: Counter_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: 'increment' | Increment | null | Deploy
  ) {
    let body: Cell | null = null;
    if (message === 'increment') {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Increment'
    ) {
      body = beginCell().store(storeIncrement(message)).endCell();
    }
    if (message === null) {
      body = new Cell();
    }
    if (
      message &&
      typeof message === 'object' &&
      !(message instanceof Slice) &&
      message.$$type === 'Deploy'
    ) {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error('Invalid message type');
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getCounter(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get('counter', builder.build())).stack;
    let result = source.readBigNumber();
    return result;
  }
}
