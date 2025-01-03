import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { styled } from "@mui/material/styles";
import React, { ReactNode, memo } from "react";
import useTableLogic from "../../hooks/useTableLogic";
import useTranslationDashboard from "../../hooks/useTranslationDashboard";
import colors from "../../../assets/theme/colors";
declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactNode | null
  ): (props: P & React.RefAttributes<T>) => React.ReactNode | null;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colors.stateColor,
    color: colors.textColorBase,
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: 500,
    lineHeight: theme.typography.subtitle1.lineHeight,
    padding: "11px 16px",
    position: "sticky",
    textWrap: "nowrap",
    border: "none",
    top: 0,
    zIndex: 1,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: theme.typography.subtitle1.fontSize,
    padding: "12px 16px",
    BorderBottom: "1px solid",
    BorderColor: "secondary.default",
    maxWidth: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    position: "relative",
    cursor: "pointer",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  align?: "center" | "left" | "right" | "inherit" | "justify";
  sortable?: boolean;
  sortKey?: string;
  format?: (value: any, row: T) => JSX.Element | string;
}

interface MainTableProps<T extends { id: string }> {
  columns: TableColumn<T>[];
  rows: T[];
  options?: { label: string; action: (id: string, row?: T) => void }[];
  isRowClick?: boolean;
  onSort?: (sortKey: string) => void;
}

const MainTable = React.forwardRef(
  <T extends { id: string }>(
    { columns, rows, options, isRowClick = true, onSort }: MainTableProps<T>,
    ref: React.Ref<HTMLTableElement>
  ) => {
    const { handleRowClick } = useTableLogic(rows);
    const { translate } = useTranslationDashboard();

    return (
      <TableContainer
        ref={ref}
        sx={{
          width: "100%",
          height: "100%",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            width: "4px",
            height: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#E7EAEE",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "#D0D5DD",
          },
          position: "relative",
        }}
      >
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.key as string}
                  align={column.align || "left"}
                >
                  {column.sortable ? (
                    <TableSortLabel
                      onClick={() => onSort!(String(column.sortKey))}
                      IconComponent={() => (
                        <>
                          <Box sx={{ px: "2px" }} />
                          {/* <IconArrowsUpDown stroke={1.8} size={"15px"} /> */}
                        </>
                      )}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </StyledTableCell>
              ))}
              {options?.length && (
                <StyledTableCell align="center">
                  {translate("ACTION")}
                </StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow
                key={row.id}
                onClick={() => (isRowClick ? handleRowClick(row.id) : {})}
              >
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.key as string}
                    align={column.align || "left"}
                  >
                    {column.format
                      ? (column.format(row[column.key], row) as ReactNode)
                      : (row[column.key] as string)}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
);

export default memo(MainTable) as typeof MainTable;
