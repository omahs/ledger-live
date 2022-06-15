import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

type Props = {
  height: number;
  width: number;
};

const PayPal: React.FC<Props> = ({ height = 12, width = 46 }) => (
  <Svg viewBox="0 0 46 12" width={width} height={height}>
    <Path
      d="M6.17416 0.000976562H2.6715C2.43181 0.000976562 2.22796 0.175111 2.19058 0.411729L0.773941 9.39349C0.745772 9.5707 0.883031 9.73049 1.0628 9.73049H2.735C2.97469 9.73049 3.17854 9.55636 3.21592 9.31923L3.59799 6.89671C3.63487 6.65958 3.83922 6.48544 4.0784 6.48544H5.18723C7.49451 6.48544 8.82613 5.36893 9.17389 3.1564C9.33061 2.18841 9.18054 1.42786 8.72728 0.895209C8.22946 0.310322 7.3465 0.000976562 6.17416 0.000976562ZM6.57826 3.28137C6.38671 4.53821 5.42641 4.53821 4.49786 4.53821H3.96931L4.34012 2.19098C4.36214 2.04911 4.48506 1.94463 4.62846 1.94463H4.87071C5.50323 1.94463 6.0999 1.94463 6.40822 2.30519C6.59209 2.52029 6.64842 2.83988 6.57826 3.28137Z"
      fill="#253B80"
    />
    <Path
      d="M16.6443 3.24014H14.967C14.8241 3.24014 14.7006 3.34462 14.6786 3.48649L14.6044 3.95563L14.4871 3.78559C14.1239 3.25858 13.3142 3.0824 12.506 3.0824C10.6525 3.0824 9.06944 4.48623 8.76111 6.45549C8.60081 7.43781 8.82872 8.37711 9.38595 9.03217C9.89709 9.63447 10.6285 9.88543 11.4986 9.88543C12.9921 9.88543 13.8202 8.92513 13.8202 8.92513L13.7455 9.39119C13.7173 9.56942 13.8546 9.72922 14.0333 9.72922H15.5442C15.7844 9.72922 15.9872 9.55508 16.0251 9.31795L16.9316 3.57714C16.9603 3.40045 16.8235 3.24014 16.6443 3.24014ZM14.3063 6.50465C14.1444 7.46291 13.3839 8.10618 12.4138 8.10618C11.9268 8.10618 11.5375 7.94997 11.2876 7.65394C11.0397 7.35996 10.9455 6.94153 11.0244 6.47546C11.1754 5.5254 11.9488 4.86113 12.904 4.86113C13.3803 4.86113 13.7675 5.01939 14.0225 5.31798C14.2781 5.61964 14.3795 6.04064 14.3063 6.50465Z"
      fill="#253B80"
    />
    <Path
      d="M25.5776 3.24048H23.892C23.7312 3.24048 23.5801 3.32038 23.489 3.45405L21.1643 6.87836L20.1789 3.58772C20.1169 3.38184 19.9269 3.24048 19.7118 3.24048H18.0555C17.8542 3.24048 17.7144 3.43715 17.7784 3.62665L19.635 9.07501L17.8895 11.539C17.7523 11.7331 17.8905 12 18.1277 12H19.8111C19.9709 12 20.1205 11.9221 20.2111 11.791L25.8173 3.69886C25.9514 3.50527 25.8137 3.24048 25.5776 3.24048Z"
      fill="#253B80"
    />
    <Path
      d="M31.1578 0.000366211H27.6546C27.4154 0.000366211 27.2116 0.174501 27.1742 0.411119L25.7576 9.39288C25.7294 9.57009 25.8667 9.72988 26.0454 9.72988H27.8431C28.0101 9.72988 28.153 9.60799 28.1791 9.44205L28.5811 6.8961C28.618 6.65897 28.8224 6.48483 29.0615 6.48483H30.1698C32.4776 6.48483 33.8087 5.36832 34.157 3.15579C34.3142 2.1878 34.1632 1.42725 33.7099 0.894599C33.2126 0.309711 32.3301 0.000366211 31.1578 0.000366211ZM31.5619 3.28076C31.3709 4.5376 30.4106 4.5376 29.4815 4.5376H28.9535L29.3248 2.19037C29.3468 2.0485 29.4687 1.94402 29.6126 1.94402H29.8549C30.4869 1.94402 31.0841 1.94402 31.3924 2.30458C31.5762 2.51968 31.6321 2.83927 31.5619 3.28076Z"
      fill="#179BD7"
    />
    <Path
      d="M41.6274 3.24014H39.9512C39.8072 3.24014 39.6848 3.34462 39.6633 3.48649L39.5891 3.95563L39.4713 3.78559C39.1081 3.25858 38.2989 3.0824 37.4907 3.0824C35.6372 3.0824 34.0546 4.48623 33.7463 6.45549C33.5865 7.43781 33.8134 8.37711 34.3706 9.03217C34.8828 9.63447 35.6131 9.88543 36.4833 9.88543C37.9768 9.88543 38.8049 8.92513 38.8049 8.92513L38.7302 9.39119C38.702 9.56942 38.8393 9.72922 39.019 9.72922H40.5294C40.7686 9.72922 40.9724 9.55508 41.0098 9.31795L41.9168 3.57714C41.9445 3.40045 41.8072 3.24014 41.6274 3.24014ZM39.2894 6.50465C39.1286 7.46291 38.367 8.10618 37.397 8.10618C36.911 8.10618 36.5207 7.94997 36.2708 7.65394C36.0229 7.35996 35.9297 6.94153 36.0075 6.47546C36.1596 5.5254 36.932 4.86113 37.8871 4.86113C38.3635 4.86113 38.7506 5.01939 39.0057 5.31798C39.2623 5.61964 39.3637 6.04064 39.2894 6.50465Z"
      fill="#179BD7"
    />
    <Path
      d="M43.6049 0.246861L42.1673 9.39303C42.1391 9.57023 42.2763 9.73003 42.4551 9.73003H43.9004C44.1406 9.73003 44.3444 9.55589 44.3813 9.31876L45.799 0.337514C45.8272 0.160306 45.6899 0 45.5112 0H43.8927C43.7498 0.000512161 43.6269 0.104993 43.6049 0.246861Z"
      fill="#179BD7"
    />
  </Svg>
);

export default memo(PayPal);
