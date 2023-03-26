function executeCommands(commands: string[]): number[] {
  type Registry = {
    V00: number; V01: number; V02: number; V03: number;
    V04: number; V05: number; V06: number; V07: number;
  }
  
  const maxValue: number = 256;

  const registries: Registry = {
    V00: 0, V01: 0, V02: 0, V03: 0,
    V04: 0, V05: 0, V06: 0, V07: 0
  }

  const actions = {
    MOV: (value: string, registry: string) => {
      registries[registry] = value.startsWith('V')
        ? registries[value]
        : +value
    },
    ADD: (registry1: string, registry2: string) => {
      registries[registry1] = (
        registries[registry1] + registries[registry2]
      ) % maxValue
    },
    DEC: (registry: string) => {
      registries[registry] = (
        registries[registry] - 1 + maxValue
      ) % maxValue
    },
    INC: (registry: string) => {
      registries[registry] = (
        registries[registry] + 1
      ) % maxValue
    },
    JMP: (position: number, index: number) => {
      if (registries.V00 > 0) {
        commands.slice(position, index + 1)
          .forEach(command => executeAction(command, index))
      }
    }
  }

  const executeAction = (action: string, index: number) => {
    const [ command, args ] = action.split(' ');
    const argsList: string[] = args.split(',').map(argument => 
      argument.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`)
    );
    actions[command](...argsList, index);
  }

  commands.forEach(executeAction);
  let registriesResult = Object.values(registries);
  
  return registriesResult;
}