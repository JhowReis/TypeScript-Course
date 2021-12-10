const objetcA: {
  keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'value A',
  keyB: 'value B',
};

objetcA.keyA = 'new value';
objetcA.keyC = 'new value';
objetcA.keyD = 'new value';
