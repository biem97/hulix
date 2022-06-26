import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="transparent"
      size="xl"
      sx={(theme) => ({
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.primaryColor,
      })}
    >
      {colorScheme === 'dark' ? (
        <SunIcon width={20} height={20} />
      ) : (
        <MoonIcon width={20} height={20} />
      )}
    </ActionIcon>
  );
}
