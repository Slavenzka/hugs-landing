import React from 'react'
import css from './ModalTable.module.scss'
import classnames from 'classnames'
import IconOK from 'assets/icons/IconOK'

const ModalTable = ({ className, headings, rows, results }) => {
  const columnWidth = `calc((100% - 68.5rem) / ${headings.length})`

  const renderHeadings = headings => {
    const headingItems = headings.map(({ label, bgColor }, index) => (
      <th
        className={css.heading}
        dangerouslySetInnerHTML={{ __html: label }}
        style={{
          backgroundColor: bgColor,
          width: columnWidth
        }}
        key={`Modal table heading#${index}`}
      />
    ))

    return (
      <tr>
        <th className={css.heading} />
        { headingItems }
      </tr>
    )
  }

  const renderRows = rows => {
    const renderRow = row => row.map(({ key, value, status, label }, index) => (
      <td
        className={css.cell}
        key={`Modal table cell#${index}`}
        style={{
          width: index === 0 ? '68.5rem' : `calc((133.6rem - 68.5rem) / ${headings.length})`
        }}
      >
        {key &&
          <span
            className={css.key}
            dangerouslySetInnerHTML={{ __html: key }}
          />
        }
        {value &&
          <span
            className={css.value}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        }
        {status &&
          <IconOK className={css.iconOK} />
        }
        {label &&
          <span
            className={css.label}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        }
      </td>
    ))

    return rows.map((row, index) => (
      <tr className={css.row} key={`Modal table row#${index}`}>
        { renderRow(row) }
      </tr>
    ))
  }

  const renderResults = results => {
    const cells = results.map(({ label, link, notification }, index) => (
      <td className={css.result} key={`Result cell#${index}`}>
        {label &&
          <span
            className={css.labelResult}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        }
        {link &&
          <a
            className={css.link}
            href={link.url}
            style={{
              backgroundColor: link.bgColor
            }}
          >
            { link.label }
            {link.notification &&
              <span
                className={css.notification}
                dangerouslySetInnerHTML={{ __html: link.notification }}
              />
            }
          </a>
        }
      </td>
    ))

    return (
      <tr className={css.results}>
        { cells }
      </tr>
    )
  }

  return (
    <div className={classnames(css.wrapper, className)}>
      <table className={css.table}>
        <tbody>
          { renderHeadings(headings) }
          { renderRows(rows) }
          { renderResults(results) }
        </tbody>
      </table>
    </div>
  )
}

export default ModalTable
