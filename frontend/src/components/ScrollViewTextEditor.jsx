import React, { useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { css } from "@emotion/css";
import range from "lodash/range";
import RichTextEditor from "./RichTextEditor";

/**
 * This is an example we can use to test the scrollIntoView functionality in
 * `Editable`. Keeping it here for now as we may need it to make sure it is
 * working properly after adding it.
 *
 * If all is good, we can remove this example.
 *
 * Note:
 * The example needs to be added to `[example].tsx` before it can be used.
 */

const ScrollIntoViewExample = () => {
  return (
    <div className="h-[480px] w-[960px] overflow-x-hidden overflow-y-scroll bg-slate-200 p-4">
      <RichTextEditor />
    </div>
  );
};

export default ScrollIntoViewExample;
