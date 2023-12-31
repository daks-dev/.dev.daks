import defaultTheme from 'tailwindcss/defaultTheme';

export default (
  data?: number | string | { bp?: number | string; min?: boolean; max?: boolean }
) => {
  if (typeof data !== 'object') data = { bp: data };
  const bp =
    typeof data.bp === 'number' || (typeof data.bp === 'string' && /^[1-9]\d{2,3}$/.test(data.bp))
      ? `${data.bp}px`
      : typeof data.bp === 'string' && /^[1-9]\d{2,3}px$/.test(data.bp)
      ? data.bp
      : undefined;
  const { min = true, max = true } = data;

  const strs = {
    ...defaultTheme.screens,
    ...(bp ? { bp } : {}),
    ...(min
      ? {
          xs: '480px',
          '3xl': '1680px'
        }
      : {})
  } as Record<string, string>;

  const nums = Object.keys(strs).reduce(
    (acc, val) => ((acc[val] = Number(strs[val].replace('px', ''))), acc),
    {} as Record<string, number>
  );

  const asc = (x: string, y: string) => (nums[x] < nums[y] ? -1 : nums[x] > nums[y] ? 1 : 0);
  const desc = (x: string, y: string) => (nums[x] < nums[y] ? 1 : nums[x] > nums[y] ? -1 : 0);

  return {
    ...(max
      ? Object.keys(nums)
          .sort(desc)
          .reduce(
            (acc, val) => ((acc[`-${val}`] = { max: `${nums[val] - 1}px` }), acc),
            {} as Record<string, unknown>
          )
      : {}),
    ...Object.keys(nums)
      .sort(asc)
      .reduce((acc, val) => ((acc[val] = `${nums[val]}px`), acc), {} as Record<string, unknown>)
  } as Record<string, never>;
};
