function executeCommands(commands) {
  const maxValue = 256

  const registries = {
    V00: 0,
    V01: 0,
    V02: 0,
    V03: 0,
    V04: 0,
    V05: 0,
    V06: 0,
    V07: 0
  }

  const actions = {
    MOV: (value, registry) => {
      registries[registry] = value.startsWith('V')
        ? registries[value]
        : +value
    },
    ADD: (registry1, registry2) => {
      registries[registry1] = (
        registries[registry1] + registries[registry2]
      ) % maxValue
    },
    DEC: registry => {
      registries[registry] = (
        registries[registry] - 1 + maxValue
      ) % maxValue
    },
    INC: registry => {
      registries[registry] = (
        registries[registry] + 1
      ) % maxValue
    },
    JMP: (position, index) => {
      if (registries.V00 > 0) {
        commands.slice(position, index + 1)
          .forEach(command => executeAction(command, index))
      }
    }
  }

  const executeAction = (action, index) => {
    const [ command, args ] = action.split(' ')
    const argsList = args.split(',').map(argument => 
      argument.replace(/V(\d+)/, (_, p1) => `V0${p1 % 8}`)
    )
    actions[command](...argsList, index)
  }

  commands.forEach(executeAction)
  let registriesResult = Object.values(registries)
  
  return registriesResult
}

module.exports = executeCommands