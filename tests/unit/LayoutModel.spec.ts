import { Layout } from "../../src/components/Layout.model";

const layoutOptions = {
  breakpoint: "1",
  numberOfCols: Layout.defaults.numberOfCols,
  margin: Layout.defaults.margin,
};

//Row Height Tests --------------------
test("Test Row Height being equal to colWidth when not defined", () => {
  const layout = new Layout({ ...layoutOptions });
  expect(layout.rowHeight).toBe(layout.colWidth);
});

test("Test Row Height being set by constructor", () => {
  const rowHeight = 200;
  const layout = new Layout({ ...layoutOptions, rowHeight });
  expect(layout.rowHeight).toBe(rowHeight);
});

test("Test Row Height being set by reactive Method", () => {
  const rowHeight = 200;
  const layout = new Layout({ ...layoutOptions });
  expect(layout.rowHeight).not.toBe(rowHeight);
  layout.rowHeight = rowHeight;
  expect(layout.rowHeight).toBe(rowHeight);
});

test("Test Max Row Height", () => {
  const rowHeight = 200;
  const maxRowHeight = 190;
  const layout = new Layout({ ...layoutOptions, rowHeight });
  expect(layout.rowHeight).toBe(rowHeight);
  layout.maxRowHeight = maxRowHeight;
  expect(layout.rowHeight).toBe(maxRowHeight);

  const layout2 = new Layout({ ...layoutOptions, width: 400, numberOfCols: 1 });
  expect(layout2.rowHeight).not.toBe(rowHeight);
  layout2.maxRowHeight = maxRowHeight;
  expect(layout2.rowHeight).toBe(maxRowHeight);
});

test("Test Min Row Height", () => {
  const rowHeight = 200;
  const minRowHeight = 210;
  const layout = new Layout({ ...layoutOptions, rowHeight });
  expect(layout.rowHeight).toBe(rowHeight);
  layout.minRowHeight = minRowHeight;
  expect(layout.rowHeight).toBe(minRowHeight);

  const layout2 = new Layout({
    ...layoutOptions,
    width: 400,
    numberOfCols: 10,
  });
  expect(layout2.rowHeight).not.toBe(rowHeight);
  layout2.minRowHeight = minRowHeight;
  expect(layout2.rowHeight).toBe(minRowHeight);
});
