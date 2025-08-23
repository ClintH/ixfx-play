export type MidiCommands = 'noteon' | 'noteoff' | 'pitchbend' | 'cc' | 'poly-at' | 'progchange' | 'at'

export type MidiMessage = {
  command: MidiCommands
  channel: number
  note: number
  velocity: number
}

export const parse = (data: Uint8Array): MidiMessage | undefined => {
  let command: MidiCommands | undefined;

  let first = data[ 0 ];
  let second = data[ 1 ];
  let third = data[ 2 ];

  let channel = 0;
  if (first >= 144 && first <= 159) {
    channel = first - 143;
    command = third === 0 ? `noteoff` : `noteon`;
  } else if (first >= 128 && first <= 143) {
    channel = first - 127;
    command = `noteoff`;
  } else if (first >= 160 && first <= 175) {
    channel = first - 159;
    command = `poly-at`;
  } else if (first >= 176 && first <= 191) {
    channel = first - 175;
    command = `cc`;
  } else if (first >= 192 && first <= 207) {
    channel = first - 191;
    command = `progchange`;
  } else if (first >= 208 && first <= 223) {
    channel = first - 207;
    command = `at`;
  } else if (first >= 224 && first <= 239) {
    channel = first - 223;
    command = `pitchbend`;
  }

  if (command === undefined) {
    console.error(`Unknown command: '${ command }'`);
    console.log(data);
  } else {
    return { command, note: second, velocity: third, channel };
  }
};

export const create = (msg: MidiMessage): Uint8Array => {
  const data = new Uint8Array(3);
  data[ 1 ] = msg.note;
  data[ 2 ] = msg.velocity;
  switch (msg.command) {
    case `cc`:
      data[ 0 ] = msg.channel + 175;
      break;
    case `noteon`:
      data[ 0 ] = msg.channel + 143;
      break;
    case `noteoff`:
      data[ 0 ] = msg.channel + 127;
      break;
    case `pitchbend`:
      data[ 0 ] = msg.channel + 223;
      break;
    case `poly-at`:
      data[ 0 ] = msg.channel + 159;
      break;
    case `progchange`:
      data[ 0 ] = msg.channel + 191;
      break;
    case `at`:
      data[ 0 ] = msg.channel + 207;
      break;
    default:
      throw new Error(`Command not supported '${ msg.command }'`);
  }
  return data;
}