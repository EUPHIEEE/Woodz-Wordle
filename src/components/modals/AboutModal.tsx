import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Woodz Version of Wordle. 
       <br/> Created by twitter @u4ia_twt.
       <br/> For original open source code, 
       <br/> see below. -{' '}
        <a
          href="https://github.com/hannahcode/GAME"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
