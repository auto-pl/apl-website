var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var svgr = require("@svgr/core")["default"];
var ICONS_SOURCE_DIR = "src/app/Resources/Images/";
var COMPONENTS_DIR = "src/Components/svg_wrappers/";
// Template to generate named exports instaed of default ones
var iconComponentTemplate = function (_a, opts, _b) {
    var template = _a.template;
    var imports = _b.imports, componentName = _b.componentName, jsx = _b.jsx;
    return template.smart({ plugins: ["typescript"] }).ast(__makeTemplateObject(["\n        ", "\n        ", "\n        export const ", " = (props: React.SVGProps<SVGSVGElement>) => ", ";\n    "], ["\n        ", "\n        ", "\n        export const ", " = (props: React.SVGProps<SVGSVGElement>) => ", ";\n    "]), imports, "\n", componentName, jsx);
};
var icons = glob.sync(ICONS_SOURCE_DIR + "/**.svg");
for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
    var icon = icons_1[_i];
    var svg = fs.readFileSync(icon, "utf8");
    var componentName = path.parse(icon).name;
    var componentCode = svgr.sync(svg, {
        template: iconComponentTemplate,
        // 1. Clean SVG files using SVGO
        // 2. Generate JSX
        // 3. Format the result using Prettier
        plugins: [
            "@svgr/plugin-svgo",
            "@svgr/plugin-jsx",
            "@svgr/plugin-prettier",
        ],
        // Replace hardcoded colors with `currentColor`
        svgoConfig: {
            plugins: [{ convertColors: { currentColor: true } }]
        },
        // Replace dimentions
        svgProps: { height: 32, width: 32, viewBox: "0 0 32 32" }
    }, { componentName: componentName });
    fs.writeFileSync(COMPONENTS_DIR + "/" + componentName + ".tsx", componentCode);
}
